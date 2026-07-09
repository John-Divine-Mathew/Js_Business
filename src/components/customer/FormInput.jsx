export default function FormInput({
    label,
    ...props
}) {
    return (

        <div className="space-y-2">

            <label className="font-medium">

                {label}

            </label>

            <input

                {...props}

                className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-green-500"

            />

        </div>

    )
}