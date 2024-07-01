import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Database } from 'common/types/supabase';
import { ConfigService } from '.';
import { AppConfigs } from './appConfigs.enum';

export const supabase: SupabaseClient<Database> = createClient<Database>(
  ConfigService.getConfigKeyValue(AppConfigs.SUPABASE_URL),
  ConfigService.getConfigKeyValue(AppConfigs.SUPABASE_ANON_KEY),
);
