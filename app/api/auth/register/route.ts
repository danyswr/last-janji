
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password, userType, name } = await request.json()

    // Simulasi register logic - ganti dengan logic sesungguhnya
    if (email && password && name) {
      const response = NextResponse.json({ 
        success: true, 
        userType: userType || 'buyer',
        message: 'Registration successful' 
      })
      
      // Set cookie untuk session
      response.cookies.set('auth-token', 'dummy-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      })
      
      return response
    }

    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
