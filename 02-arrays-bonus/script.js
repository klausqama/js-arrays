const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.toReversed()
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
for(let i =0; i<teachers.length; i++){
  const currentName = teachers[i]
  if(currentName.length>= 5){
    longNames.push(currentName)
  }
}
// 3. Rimuovi 'Ed' dall'array teachers
const EdIndex = teachers.indexOf('Ed')
if(EdIndex >= 0){
  teachers.splice(EdIndex, 1)
}
console.log(teachers)