'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function PrototypeDemo() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    useEffect(() => {
        const handleVideoEnd = () => {
            setIsPlaying(false)
        }

        if (videoRef.current) {
            videoRef.current.addEventListener('ended', handleVideoEnd)
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('ended', handleVideoEnd)
            }
        }
    }, [])

    return (
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden w-full">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/FinAd_2X.mp4"
                onClick={handlePlayClick}
            >
                Your browser does not support the video tag.
            </video>
            {(!isPlaying || videoRef.current?.ended) && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                        onClick={handlePlayClick}
                        variant="default"
                        size="lg"
                        className="bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        <Play className="mr-2 h-6 w-6" /> Watch Demo
                    </Button>
                </div>
            )}
        </div>
    )
}

