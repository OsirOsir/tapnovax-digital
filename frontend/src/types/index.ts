export interface User {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  role: "admin" | "staff" | "client";
  status: string;
  created_at: string;
  profile?: ClientProfile;
}

export interface ClientProfile {
  id: number;
  user_id: number;
  business_name?: string;
  business_type?: string;
  location?: string;
  preferred_contact_method?: string;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price_type: string;
  base_price?: number;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
}

export interface Inquiry {
  id: number;
  full_name: string;
  phone?: string;
  email: string;
  business_name?: string;
  service_interest?: string;
  message?: string;
  source: string;
  status: string;
  assigned_staff_id?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface ServiceRequest {
  id: number;
  client_id: number;
  service_id: number;
  service_name?: string;
  title: string;
  description?: string;
  budget_range?: string;
  status: string;
  assigned_staff_id?: number;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Onboarding {
  id: number;
  client_id: number;
  full_name: string;
  business_name?: string;
  service_needed?: string;
  status: string;
  created_at: string;
}

export interface DashboardStats {
  total_users: number;
  total_clients: number;
  total_staff: number;
  total_inquiries: number;
  new_inquiries: number;
  converted_leads: number;
  total_requests: number;
  pending_requests: number;
  completed_requests: number;
  in_progress: number;
}
