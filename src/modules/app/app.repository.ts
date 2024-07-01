import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Database } from 'common/types/supabase';
import { AppEntity } from './app.entity';

const supabase: SupabaseClient<Database> = createClient<Database>(
  'https://zxcwjeuxxmgoieaumwpa.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4Y3dqZXV4eG1nb2llYXVtd3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4MTg4NTIsImV4cCI6MjAzNTM5NDg1Mn0.e70keBSoUWGk3CX7w0dQWwHenb3onBZ2CTszL4h4GfE',
);

export class AppRepository {
  async getData(): Promise<AppEntity[]> {
    const { data, error } = await supabase.from('test').select();

    console.log('error: ', error);
    console.log('read data: ', data);
    return data;
  }

  async create(request: AppEntity): Promise<AppEntity> {
    const { data, error } = await supabase.from('test').upsert(request).select();

    console.log('data: ', data);
    return data && data.length ? data[0] : null;
  }
}
