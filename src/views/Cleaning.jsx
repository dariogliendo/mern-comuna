import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/user.service'
import { styled } from 'styled-components'
import roomService from '../services/room.service'

const CleaningTable = styled.table`
`

const Cleaning = () => {
  const session = JSON.parse(localStorage.getItem('session'))
  const [currentUser, setCurrentUser] = useState({})
  const [rooms, setRooms] = useState([])
  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const users = await getUsers()
    setUsers(users)
    const currentUser = users.find(f => f.email === session.email)
    setCurrentUser(currentUser)
  }

  const refreshRooms = async () => {
    setRooms(await roomService.get())
  }

  useEffect(() => {
    async function getData() {
      try {
        await requestUsers()
        await refreshRooms()
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  const createRoom = async () => {
    const name = prompt("Ingrese el nombre de la habitación")
    await roomService.save({
      name: name
    })
    refreshRooms()
  }

  const notifyCleaning = async (roomId) => {
    await roomService.save({ _id: roomId, cleaned: true })
    refreshRooms()
  }

  const undoCleaned = async (roomId) => {
    await roomService.save({ _id: roomId, cleaned: false })
    refreshRooms()
  }

  const pickAssignee = async () => {
    console.log('no')
  }
  
  const removeRoom = async (roomId) => {
    await roomService.remove(roomId)
    refreshRooms()
  }

  const roomStates = () => rooms.map((room, ix) => {
    const assigned = users.find(f => f._id === room.assignedRoomie)
    return <tr key={ix}>
      <td>{room.name}</td>
      <td>{assigned?.name}</td>
      <td>
        <input type="checkbox" checked={room.cleaned} readOnly={true} />
      </td>
      <td>
        {(room.assignedRoomie === currentUser?._id && !room.cleaned) ? <button onClick={() => notifyCleaning(room._id)}>Avisar que limpié</button> : ''}
        {(room.assignedRoomie === currentUser?._id && room.cleaned) ? <button onClick={() => undoCleaned(room._id)}>Deshacer</button> : ''}
      </td>
      {currentUser?.admin ? <td><button onClick={() => pickAssignee(room)}>Elegir responsable</button></td> : ''}
      {currentUser?.admin ? <td><button onClick={() => removeRoom(room._id)}>Eliminar</button></td> : ''}
    </tr>})

  if (!users) return false

  return (
    <>
      <h1>Limpieza</h1>
      {currentUser?.admin ? <button onClick={createRoom}>Crear Sector</button> : ''}
      <CleaningTable>
        <thead>
          <tr>
            <th>
              Sector
            </th>
            <th>
              Responsable
            </th>
            <th>
              Limpió
            </th>
          </tr>
        </thead>
        <tbody>
          {roomStates()}
        </tbody>
      </CleaningTable>
    </>
  )
}

export default Cleaning