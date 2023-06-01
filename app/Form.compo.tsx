"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function FormWelcome() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white text-green-500 p-5">
                    <Dialog.Title>BETA PREVIEW</Dialog.Title>
                    <Dialog.Description>
                        This project is still in development. This is a beta preview.
                    </Dialog.Description>
                    <button className="bg-green-500 px-2 text-white" onClick={() => setIsOpen(false)}>OK</button>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
