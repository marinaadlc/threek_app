import bcrypt from 'bcryptjs'

const users = [
    {
        nombre: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
        avatar:'ejemplo',
        primApellido: 'ejemplo',
        segApellido: 'ejemplo2',
        genero:'cis',
        fecNac: '01-01-2021',
        dni: 'YXXXXXXXA',
        direccion: {
            address: 'La casa',
            city: 'Madrid',
            postalCode: '28001',
            country: 'Spain'
        }
    },
    {
        nombre: 'Ro No',
        email: 'ro@example.com',
        password: bcrypt.hashSync('123456', 10),
        primApellido: 'ejemplo',
        segApellido: 'ejemplo2',
        genero:'cis',
        fecNac: '01-01-2021',
        dni: 'YXXXXXXXA',
        direccion: {
            address: 'La casa',
            city: 'Madrid',
            postalCode: '28001',
            country: 'Spain'
        }
    },
    {
        nombre: 'Ja Fe',
        email: 'jf@example.com',
        password: bcrypt.hashSync('123456', 10),
        primApellido: 'ejemplo',
        segApellido: 'ejemplo2',
        genero:'cis',
        fecNac: '01-01-2021',
        dni: 'YXXXXXXXA',
        direccion: {
            address: 'La casa',
            city: 'Madrid',
            postalCode: '28001',
            country: 'Spain'
        }
    }
]

export default users