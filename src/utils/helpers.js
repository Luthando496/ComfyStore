export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-SA',{
        style: 'currency',
        currency:'ZAR',

    }).format(price / 100)
}

export const getUniqueValues = () => {}
