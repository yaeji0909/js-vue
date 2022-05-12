const data = [
  {
    id: 1,
    name: '[1등캣] 러시안블루',
    image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?cs=srgb&dl=pexels-pixabay-104827.jpg&fm=jpg'
  },
  {
    id: 2,
    name: '[2등캣] 치즈',
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
  {
    id: 3,
    name: '[3등캣] 오드아이',
    image: 'https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?cs=srgb&dl=pexels-dids-1302290.jpg&fm=jpg'
  },
  {
    id: 4,
    name: '[4등캣] 고등어',
    image: 'https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?cs=srgb&dl=pexels-mali-maeder-225406.jpg&fm=jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}