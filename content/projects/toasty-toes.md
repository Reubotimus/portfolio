---
slug: toasty-toes
name: Toasty Toes
type: Ecommerce Store
date: "10/2024"
order: 2
card:
  title: Toasty Toes
  date: "10/2024"
  slug: toasty-toes
  image:
    url: /toasty-toes.png
    width: 1920
    height: 1080
  tags:
    - Next.js
    - Tailwind
    - Pocket Base
    - AWS Lambda
headLineImage:
  url: /toasty-toes.png
  width: 1920
  height: 1080
members:
  - Reuben Cook [Software Developer]
links: []
---

# Project Description

Developed an automated ecommerce system designed to streamline order fulfillment and make store management accessible to non-technical users. The system automatically processes orders by integrating with CJ Dropshipping, eliminating the need for manual order fulfillment. Store owners can easily add and modify products without technical knowledge, ensuring a smooth operational workflow.

# Architecture

Built with Pocketbase as the CMS, chosen for its lightweight, real-time capabilities and ease of use for non-technical users. The Next.js frontend provides a fast, SEO-friendly interface, while an AWS Lambda function with Node.js monitors new orders in Pocketbase and sends them to CJ Dropshipping for automated fulfillment.

All product data, orders and reviews are stored in pocket base. Next.js gets this data and allows users to create new orders. The Node.js Lambda function routinely scans the pocketbase backend and will send new orders to CJ drop shipping.

![Architecture diagram](/toasty-toes-architecture.png)

# Challenges

Without a web designer, the front end has looked too simple or unprofessional. This was also my first project using Next.js and Tailwind CSS, as such frontend development was slow as I had to keep refering to the documentation. For future commercial projects I will employ a web designer as this will ensure a good user interface and reduce the need for rewrites.

# Future Improvements

This is still a work in progress, aiming to launch in March 2025. The next step is to finalise the design of the front end. Then once the business requirements are fulfilled, the website is ready to go live.

After going live the next goal will be to add an admin page which will allow the admin to add products using data provided by CJ, and preview the product page. This will allow the admin to easily add new products without having to manually populate all the information and images.
