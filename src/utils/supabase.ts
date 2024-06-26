import { createClient } from '@supabase/supabase-js'
import { BlogData } from '../types'
import { FieldValues } from 'react-hook-form'

const supabaseUrl = 'https://iictbhonfyzdaiiucfwf.supabase.co'
// Anonymous public key - no write access to blogs, no read access to comments
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpY3RiaG9uZnl6ZGFpaXVjZndmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTU3NzgsImV4cCI6MjAxOTk3MTc3OH0.fmPxiIKCDlYpeM50EnYOKuzPsklc5sWu0UDir0pIgwE'

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getBlogs(): Promise<BlogData[]> {
  const { data: blogposts, error } = await supabase
    .from('blogposts')
    .select('*')
    .order('id', { ascending: false })

  if (error) {
    console.log(error)
    throw new Error("Couldn't fetch blogs")
  }

  return blogposts
}

export async function getOneBlog(id: number): Promise<BlogData> {
  const { data: blogposts, error } = await supabase
    .from('blogposts')
    .select()
    .eq('id', id)

  if (error) {
    console.log(error)
    throw new Error(`Couldn't fetch blog with id ${id}`)
  }

  return blogposts[0]
}

export async function postMessage(data: FieldValues): Promise<boolean> {
  const { error } = await supabase.from('portfolio_messages').insert([data])
  if (error) {
    console.log(error)
    throw new Error("Couldn't post message")
  }

  return true
}
