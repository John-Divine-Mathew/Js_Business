export default function FormButton({

    title,

    onClick,

}) {

    return (

        <button

            onClick={onClick}

            className="w-full rounded-xl bg-green-600 text-white py-4 text-lg font-semibold hover:bg-green-700"

        >

            {title}

        </button>

    )

}