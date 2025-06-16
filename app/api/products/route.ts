
import { NextRequest, NextResponse } from 'next/server'

// Simulasi data produk
let products = [
  { id: 1, name: 'Product 1', price: 100000, description: 'Description 1', sellerId: 'seller1' },
  { id: 2, name: 'Product 2', price: 200000, description: 'Description 2', sellerId: 'seller1' },
]

export async function GET() {
  return NextResponse.json({ products })
}

export async function POST(request: NextRequest) {
  try {
    const { name, price, description } = await request.json()
    
    const newProduct = {
      id: products.length + 1,
      name,
      price: parseInt(price),
      description,
      sellerId: 'current-seller' // Ganti dengan seller ID yang sebenarnya
    }
    
    products.push(newProduct)
    
    return NextResponse.json({ success: true, product: newProduct })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
