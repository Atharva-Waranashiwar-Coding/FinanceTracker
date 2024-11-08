"use client";

import { useState, useContext, useEffect,useMemo } from "react";
import { financeContext } from "@/lib/store/finance-context";
import { authContext } from "@/lib/store/auth-context";

import { currencyFormatter } from "@/lib/utils";

import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";

import AddIncomeModal from "@/components/modals/AddIncomeModal";
import AddExpensesModal from "@/components/modals/AddExpensesModal";
import SignIn from "@/components/SignIn";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

// Registering necessary components for Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

  const [balance, setBalance] = useState(0);

  const { expenses, income } = useContext(financeContext);
  const { user } = useContext(authContext);

  useEffect(() => {
    const totalIncome = income.reduce((total, i) => total + i.amount, 0);
    const totalExpenses = expenses.reduce((total, e) => total + e.total, 0);
    setBalance(totalIncome - totalExpenses);
  }, [expenses, income]);

  if (!user) {
    return <SignIn />;
  }

  const expenseData = {
    labels: expenses.map((exp) => exp.title),
    datasets: [
      {
        label: "Expenses by Category",
        data: expenses.map((exp) => exp.total),
        backgroundColor: expenses.map((exp) => exp.color),
      },
    ],
  };

  const incomeVsExpenseData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Monthly Overview",
        data: [
          income.reduce((total, i) => total + i.amount, 0),
          expenses.reduce((total, e) => total + e.total, 0),
        ],
        backgroundColor: ["#4CAF50", "#FF5733"],
      },
    ],
  };

  return (
    <>
      <AddIncomeModal show={showAddIncomeModal} onClose={() => setShowAddIncomeModal(false)} />
      <AddExpensesModal show={showAddExpenseModal} onClose={() => setShowAddExpenseModal(false)} />

      <main className="container max-w-6xl px-6 mx-auto">
        <section className="py-3 flex flex-col items-center">
          <small className="text-gray-400 text-md">My Balance</small>
          <h2 className="text-4xl font-bold">{currencyFormatter(balance)}</h2>
        </section>

        <section className="flex justify-center items-center py-3">
          <div className="flex items-center gap-2 ">
            <button
              onClick={() => setShowAddExpenseModal(true)}
              className="btn btn-primary"
            >
              + Expenses
            </button>
            <button
              onClick={() => setShowAddIncomeModal(true)}
              className="btn btn-primary-outline"
            >
              + Income
            </button>
          </div>
        </section>


        {/* Expenses */}
        <section className="py-6">
          <h3 className="text-2xl">My Expenses</h3>
          <div className="flex flex-col gap-4 mt-6">
            {expenses.map((expense) => {
              return <ExpenseCategoryItem key={expense.id} expense={expense} />;
            })}
          </div>
        </section>

        {/* Charts */}
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div style={{ width: "100%", height: "400px" }}> {/* Adjust height as needed */}
              <h3 className="text-xl font-semibold">Expenses by Category</h3>
              <Doughnut
                data={expenseData}
                options={{
                  plugins: {
                    legend: { position: "bottom" },
                  },
                  maintainAspectRatio: false,
                }}
                style={{ width: "100%", height: "100%" }} // Ensures chart fills container
              />
            </div>
            <div style={{ width: "100%", height: "400px" }}> {/* Adjust height as needed */}
              <h3 className="text-xl font-semibold">Income vs Expenses</h3>
              <Bar
                data={incomeVsExpenseData}
                options={{
                  scales: {
                    y: { beginAtZero: true },
                  },
                  plugins: {
                    legend: { position: "bottom" },
                  },
                  maintainAspectRatio: false,
                }}
                style={{ width: "100%", height: "100%" }} // Ensures chart fills container
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
