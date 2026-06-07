import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const token = req.headers.get('x-revalidate-token');
  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { slug } = await req.json().catch(() => ({}));

  revalidatePath('/catalogo');
  if (slug) revalidatePath(`/product/${slug}`);

  return NextResponse.json({ revalidated: true });
}
