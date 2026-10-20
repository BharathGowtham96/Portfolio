import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins once, import everything GSAP-related from here.
gsap.registerPlugin(ScrollTrigger, useGSAP)

export const motionOK = '(prefers-reduced-motion: no-preference)'

export { gsap, ScrollTrigger, useGSAP }
