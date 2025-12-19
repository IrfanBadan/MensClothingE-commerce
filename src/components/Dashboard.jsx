import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const dashRef = useRef();
  const cardRefs = useRef([]);
  const revenueChartRef = useRef();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      gsap.fromTo(dashRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 });
      gsap.fromTo(cardRefs.current, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.3
      });
      gsap.fromTo(revenueChartRef.current, { opacity: 0, y: 30 }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 1,
        ease: 'power2.out'
      });
    }
  }, [user, navigate]);

  const overviewData = [
    { title: 'Total Income', value: '$579,000', saved: '22%' },
    { title: 'Total Expenses', value: '$79,000', saved: '25%' },
    { title: 'Cash on Hand', value: '$92,000', saved: '17%' },
    { title: 'Net Profit Margin', value: '$179,000', saved: '65%' }
  ];

  const balanceData = [
    { month: 'Jan', AP: 4000, AR: 2400 },
    { month: 'Feb', AP: 3000, AR: 1398 },
    { month: 'Mar', AP: 2000, AR: 9800 },
    { month: 'Apr', AP: 2780, AR: 3908 },
    { month: 'May', AP: 1890, AR: 4800 },
    { month: 'Jun', AP: 2390, AR: 3800 },
    { month: 'Jul', AP: 3490, AR: 4300 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 38000 },
    { month: 'Mar', revenue: 47000 },
    { month: 'Apr', revenue: 52000 },
    { month: 'May', revenue: 61000 },
    { month: 'Jun', revenue: 58000 },
    { month: 'Jul', revenue: 64000 }
  ];

  const incomePie = [
    { name: 'Budget', value: 67 },
    { name: 'Balance', value: 33 }
  ];

  const expensePie = [
    { name: 'Profit', value: 48 },
    { name: 'Balance', value: 52 }
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div ref={dashRef} className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Dashboard</h2>
        <button className="btn btn-outline-dark" onClick={logout}>Logout</button>
      </div>

      {/* Overview Cards */}
      <div className="row g-4 mb-5">
        {overviewData.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card shadow-sm p-3 text-center" ref={(el) => (cardRefs.current[i] = el)}>
              <h5>{item.title}</h5>
              <p className="fs-4 fw-bold">{item.value}</p>
              <small className="text-muted">Saved: {item.saved}</small>
            </div>
          </div>
        ))}
      </div>

     <div className="row g-4 mb-5">

  {/* AP & AR Balance Chart */}
  <div className="col-12 col-lg-6">
    <div className="card shadow-sm p-4 h-100">
      <h5 className="mb-4">AP and AR Balance (Monthly)</h5>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={balanceData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="AP" fill="#8884d8" />
          <Bar dataKey="AR" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Revenue Line Chart */}
  <div className="col-12 col-lg-6">
    <div className="card shadow-sm p-4 h-100">
      <h5 className="mb-4">Monthly Revenue Trend</h5>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>


      {/* Pie Charts */}
<div className="row g-4 mb-5">
  <div className="col-12 col-md-6">
    <div className="card shadow-sm p-4 text-center h-100">
      <h5>% of Income Budget</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={incomePie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {incomePie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <a href="#" className="btn btn-link">View Full Report</a>
    </div>
  </div>

  <div className="col-12 col-md-6">
    <div className="card shadow-sm p-4 text-center h-100">
      <h5>% of Expenses Budget</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={expensePie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {expensePie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <a href="#" className="btn btn-link">View Full Report</a>
    </div>
  </div>
</div>

    </div>
  );
}

export default Dashboard;
