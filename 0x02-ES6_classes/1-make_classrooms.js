import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  const rooms = [19, 20, 34];
  for (const room of rooms) {
    classrooms.push(new ClassRoom(room));
  }
  return classrooms;
}
