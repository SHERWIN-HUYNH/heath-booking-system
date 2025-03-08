const BillStatus = Object.freeze({
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    PENDING: "PENDING",
    REFUNDED: "REFUNDED",
    CANCELLED: "CANCELLED",
  });
  
  const Gender = Object.freeze({
    MALE: "MALE",
    FEMALE: "FEMALE",
    OTHER: "OTHER",
  });
  
  const AppointmentStatus = Object.freeze({
    SCHEDULED: "SCHEDULED",
    PENDING: "PENDING",
    CANCELLED: "CANCELLED",
  });
  
  const UserRole = Object.freeze({
    USER: "USER",
    ADMIN: "ADMIN",
    DOCTOR: "DOCTOR",
  });
  
  module.exports = { BillStatus, Gender, AppointmentStatus, UserRole };
  