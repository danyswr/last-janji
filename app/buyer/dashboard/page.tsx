
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Search, Star, ArrowLeft } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  description: string
  seller: string
  rating: number
  image: string
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Laptop Gaming",
    price: 15000000,
    description: "Laptop gaming dengan spesifikasi tinggi",
    seller: "Tech Store",
    rating: 4.5,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 2,
    name: "Smartphone Android",
    price: 8000000,
    description: "Smartphone dengan kamera terbaik di kelasnya",
    seller: "Gadget Center",
    rating: 4.2,
    image: "https://via.placeholder.com/300x200"
  },
  {
    id: 3,
    name: "Headphone Wireless",
    price: 2500000,
    description: "Headphone wireless dengan noise cancelling",
    seller: "Audio Pro",
    rating: 4.7,
    image: "https://via.placeholder.com/300x200"
  }
]

export default function BuyerDashboard() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [cart, setCart] = useState<Product[]>([])

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addToCart = (product: Product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => router.push('/landing')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-800">Buyer Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.length})
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/auth')}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  by {product.seller}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    {formatPrice(product.price)}
                  </span>
                  <Button 
                    onClick={() => addToCart(product)}
                    size="sm"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
