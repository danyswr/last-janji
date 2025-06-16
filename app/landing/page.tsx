
'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingBag, Users, TrendingUp } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
          <div className="space-x-4">
            <Link href="/auth">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Marketplace
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect buyers and sellers in a seamless, secure, and efficient platform
          </p>
          <Link href="/auth">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <ShoppingBag className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Easy Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Browse and purchase products from verified sellers with confidence
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Trusted Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Join a community of trusted buyers and sellers
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Grow Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Expand your reach and grow your business with our platform
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
