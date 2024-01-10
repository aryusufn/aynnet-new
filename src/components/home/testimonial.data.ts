import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Internet Cepat',
    content: 'Internet cepat dengan harga terjangkau cocok untuk wifi rumahan.',
    user: {
      id: 1,
      name: 'Bu Sarti',
      professional: 'Ibu Rumah Tangga',
      photo: '5.jpg',
    },
  },
  {
    id: 2,
    title: 'Cocok',
    content: 'Cocok untuk wifi rumahan terutama saya yang bekerja dari rumah.',
    user: {
      id: 1,
      name: 'Ardi',
      professional: 'Wartawan',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Koneksi Game bagus',
    content: 'Wifi nya sat set cocok untuk nge game.',
    user: {
      id: 1,
      name: 'Bintang',
      professional: 'Gamers',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Stabil',
    content:
      'Koneksinya stabil cocok untuk saya yang tiap hari berhubungan dengan media sosial, untuk upload produk baru ke sosial media.',
    user: {
      id: 1,
      name: 'Utari Ardiana',
      professional: 'Owner Online Shop',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Streaming bagus',
    content: 'Kualitas internet nya bagus terutama untuk streaming youtube.',
    user: {
      id: 1,
      name: 'Alif',
      professional: 'Streamer',
      photo: '1.jpg',
    },
  },
]
