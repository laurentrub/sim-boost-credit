-- Create storage bucket for user documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('user-documents', 'user-documents', false);

-- Create table to track user documents
CREATE TABLE public.user_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  file_type TEXT NOT NULL,
  category TEXT DEFAULT 'other',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_documents ENABLE ROW LEVEL SECURITY;

-- Users can view their own documents
CREATE POLICY "Users can view their own documents"
ON public.user_documents
FOR SELECT
USING (auth.uid() = user_id);

-- Users can upload their own documents
CREATE POLICY "Users can insert their own documents"
ON public.user_documents
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can delete their own documents
CREATE POLICY "Users can delete their own documents"
ON public.user_documents
FOR DELETE
USING (auth.uid() = user_id);

-- Admins and managers can view all documents
CREATE POLICY "Admins and managers can view all documents"
ON public.user_documents
FOR SELECT
USING (has_admin_or_manager_role(auth.uid()));

-- Storage policies for user-documents bucket
CREATE POLICY "Users can upload their own documents"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'user-documents' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can view their own documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'user-documents' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete their own documents"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'user-documents' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Admins and managers can access all documents
CREATE POLICY "Admins can view all user documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'user-documents' 
  AND has_admin_or_manager_role(auth.uid())
);