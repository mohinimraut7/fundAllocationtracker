const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🔐 LOGIN API (POST)
server.post("/login", (req, res) => {
  const { role, password } = req.body;

  const users = router.db.get("users").value();

  const user = users.find((u) => u.role === role && u.password === password);

  if (user) {
    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid role or password",
    });
  }
});

// ✅ ADD REVENUE API (POST)
server.post("/addRevenue", (req, res) => {
  const { totalRevenue, allocatedAmount, date } = req.body;

  if (!totalRevenue || !allocatedAmount || !date) {
    return res.status(400).json({
      success: false,
      message: "totalRevenue, allocatedAmount, date are required",
    });
  }

  const revenueData = {
    id: Date.now(),
    totalRevenue: Number(totalRevenue),
    allocatedAmount: Number(allocatedAmount),
    date,
  };

  router.db.get("revenue").push(revenueData).write();

  res.status(201).json({
    success: true,
    message: "Revenue Added Successfully",
    data: revenueData,
  });
});

// default routes (GET /revenue works automatically)
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server running on http://localhost:3001");
});
