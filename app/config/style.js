
const colors = {
  grey: '#161924',
  white: '#fff',
  white2: 'rgba(255, 255, 255, 0.8)',
  violet: '#53115B',
  violet2: 'rgba(212, 118, 207, 0.2)',
}

export default {
  colors,
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.white
  },
  text: {
    body: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: '500',
    },
    title: {
      color: colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    title2: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      color: colors.white2,
      fontSize: 12,
    },

  },
}
