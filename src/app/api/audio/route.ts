import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public/audio/loading.mp3');
        const fileBuffer = fs.readFileSync(filePath);
        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
            },
        });
    } catch (error) {
        console.error('Audio file not found:', error);
        return new NextResponse('File not found', { status: 404 });
    }
}
