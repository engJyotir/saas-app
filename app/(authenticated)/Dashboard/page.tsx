import React, { Component, useCallback, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Todo } from '@prisma/client'
import { useDebounceValue } from 'usehooks-ts'
export default function Dashboard() {
    const {user} = useUser()
    const [todos, setTodos] = useState<Todo[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(false);


    const [debounceSearchTerm] = useDebounceValue(searchTerm,300)

    const fetchTodos = useCallback( async(page:number) => {
        try {
            setLoading(true)
           const response =  await fetch(`/api/todos?page=${page}&search=${debounceSearchTerm}`)
           if (!response){
            throw new Error ("failed to fetch todos")
            
           }
        } catch (error) {
            
        }
    }, [debounceSearchTerm] )
}