
-- Create email_history table to track all emails sent for loan requests
CREATE TABLE public.email_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  loan_request_id UUID NOT NULL REFERENCES public.loan_requests(id) ON DELETE CASCADE,
  sent_by UUID NOT NULL,
  recipient_email TEXT NOT NULL,
  email_type TEXT NOT NULL, -- 'status_notification', 'custom', 'document_request', 'contract'
  subject TEXT,
  body TEXT,
  status TEXT NOT NULL DEFAULT 'sent',
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.email_history ENABLE ROW LEVEL SECURITY;

-- Admins and managers can view all email history
CREATE POLICY "Admins and managers can view all email history"
ON public.email_history
FOR SELECT
USING (has_admin_or_manager_role(auth.uid()));

-- Admins and managers can insert email history
CREATE POLICY "Admins and managers can insert email history"
ON public.email_history
FOR INSERT
WITH CHECK (has_admin_or_manager_role(auth.uid()));
