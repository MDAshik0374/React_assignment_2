import React from 'react'

const Forms = ({ formValues, setFormValues, onAddEntry, isEditing }) => {
  const { type, amount, category, date } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && date) {
      const newEntry = {
        id: isEditing ? formValues.id : crypto.randomUUID(),
        type,
        category,
        amount: parseFloat(amount),
        date,
      };
      onAddEntry(newEntry);
    } else {
      alert('Please enter  Amount and Date both');
    }
  };


  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">Expense Tracker</h2>

      <form onSubmit={handleSubmit}>
        <div
          className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
        >
          {/* <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 active"> */}
          <div

            onClick={() => setFormValues({ ...formValues, type: 'expense', category: 'Education' })}
            className={`cursor-pointer text-center flex-1 px-4 py-2 
            ${type === 'expense' ? 'bg-teal-600 text-white' : 'bg-white text-black'} 
            hover:bg-teal-500 hover:text-white`}
          >
            Expense
          </div>
          {/* <div className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"> */}
          <div
            onClick={() => setFormValues({ ...formValues, type: 'income', category: 'Salary' })}
            className={`cursor-pointer text-center flex-1 px-4 py-2 
            ${type === 'income' ? 'bg-teal-600 text-white' : 'bg-white text-black'} 
            hover:bg-teal-500 hover:text-white`}
          >
            Income
          </div>
        </div>

        {/*<!-- Note -->*/}
        {/* <!-- Income Categories - Salary, Outsourcing, Bond, Dividend --> */}
        {/* <!-- Expense Categories - Education, Food, Health, Insurance,Tax,Transport,Telephone --> */}
        {type === 'income' ? (<div className="mt-3">
          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              autoComplete="category-name"
              value={category} onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              <option value="Salary">Salary</option>
              <option value="Outsourcing">Outsourcing</option>
              <option value="Bond">Bond</option>
              <option value="Dividend">Dividend</option>
            </select>
          </div>
        </div>) :
            (<div className="mt-3">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                autoComplete="category-name"
                value={category} onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              >

                <option value="Education">Education</option>
                <option value="Food">Food</option>
                <option value="Health">Health</option>
                <option value="Bill">Bill</option>
                <option value="Insurance">Insurance</option>
                <option value="Tax">Tax</option>
                <option value="Transport">Transport</option>
                <option value="Telephone">Telephone</option>
              </select>
            </div>
          </div>)}

     {/* Show Amount field*/}
        <div className="mt-3">
          <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              id="amount"
              autoComplete="off"
              placeholder="12931"
              value={amount}
              onChange={(e) => setFormValues({ ...formValues, amount: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
    {/* Show date field*/}
        <div className="mt-3">
          <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              autoComplete="off"
              placeholder="12931"
              value={date}
              onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          {isEditing ? 'Update' : 'Save'}
        </button>
      </form>
    </div>
  )
};

export default Forms;
