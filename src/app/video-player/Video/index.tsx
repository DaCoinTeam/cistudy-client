"use client"
import React, { useEffect, useRef } from "react"
import videojs from "video.js"
import Player from "video.js/dist/types/player"
import "video.js/dist/video-js.css"
import "./video.css"

interface VideoProps {
  className?: string;
  options?: any;
  onReady?: any;
}

export const Video = (props: VideoProps) => {
    const videoRef = useRef<HTMLDivElement | null>(null)
    const playerRef = useRef<Player | null>(null)
    const { options, onReady } = props

    useEffect(() => {
        if (!videoRef.current) return

        if (!playerRef.current) {
            const videoElement = document.createElement("video-js")

            videoElement.classList.add("video-js")
            videoRef.current.append(videoElement)

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log("player is ready")
                onReady && onReady(player)
            }))
        } else {
            const player = playerRef.current

            player.autoplay(options.autoplay)
            player.src(options.sources)
        }
    }, [options, videoRef])

    useEffect(() => {
        const player = playerRef.current

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose()
                playerRef.current = null
            }
        }
    }, [playerRef])

    return (
        <div className={props.className}>
            <div data-vjs-player>
                <div ref={videoRef} />
            </div>
        </div>
    )
}

export default Video
