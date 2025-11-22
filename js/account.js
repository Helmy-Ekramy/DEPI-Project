
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item[data-section]');
  const sections = document.querySelectorAll('.account-content');

  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      menuItems.forEach(i => i.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));
      
      this.classList.add('active');
      const target = this.getAttribute('data-section');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // Notification Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const type = this.getAttribute('data-tab');
      document.querySelectorAll('.notif-item').forEach(item => {
        if (type === 'all' || item.getAttribute('data-type') === type) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
