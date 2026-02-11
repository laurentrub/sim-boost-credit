
-- Add foreign key from user_documents.user_id to profiles.id
ALTER TABLE public.user_documents
  ADD CONSTRAINT user_documents_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id);

-- Add foreign key from document_requests.user_id to profiles.id
ALTER TABLE public.document_requests
  ADD CONSTRAINT document_requests_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES public.profiles(id);
