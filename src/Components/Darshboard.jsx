import React from 'react'
import  { useState } from 'react';
import Forms from './Forms'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'
import BalanceCard from './BalanceCard'
import IncomeCard from './IncomeCard'
import ExpenseCard from './ExpenseCard'

export default function Darshboard() {


  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({
    type: 'income',
    amount: '',
    category: 'Salary', // Default income category
    date: ''
  });
  const [editEntryId, setEditEntryId] = useState(null);

  const handleAddEntry = (newEntry) => {
    if (editEntryId) {
      // If in edit mode, update the entry
      setData(data.map(entry => (entry.id === editEntryId ? newEntry : entry)));
      setEditEntryId(null); // Reset edit mode
    } else {
      // Add new entry
      setData([...data, newEntry]);
    }
    // Reset form values after submit
    setFormValues({
      type: 'income',
      amount: '',
      category: 'Salary', // Reset to default
      date: ''
    });
  };
  
  const handleEditEntry = (entry) => {
    setFormValues({
      type: entry.type,
      amount: entry.amount,
      category: entry.category,
      date: entry.date
    });
    setEditEntryId(entry.id);
  };

  const handleDeleteEntry = (id) => {
    setData(data.filter(entry => entry.id !== id));
  };

  const totalIncome = data
    .filter(entry => entry.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = data
    .filter(entry => entry.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Submission Form --> */}
      {/* <Forms formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/> */}
      <Forms formValues={formValues} 
        setFormValues={setFormValues} 
        onAddEntry={handleAddEntry} 
        isEditing={editEntryId !== null} />
  {/* <!-----> */}
      {/* <!-- Right Column --> */}
      <div className="lg:col-span-2">
        {/* <!-- Total Balance Stat--> */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
               <BalanceCard balance={balance}/>
               <IncomeCard totalIncome={totalIncome}/>
               <ExpenseCard totalExpenses={totalExpenses}/>
            </dl>
          </div>
        </div>

        {/* <!-- List Down --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {/* <!-- Income --> */}
          <IncomeList data={data} 
          onDelete={handleDeleteEntry} 
          onEdit={handleEditEntry} />
          {/* <!-- Expense --> */}
          <ExpenseList data={data}
           onDelete={handleDeleteEntry} 
           onEdit={handleEditEntry} 
          />
        </div>
      </div>
    </section>
  </main>

  )
}
