// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
// import Image from "next/image";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const { data: session, status } = useSession();

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (status === "loading") return; // wait for session check
//     if (status === "unauthenticated") {
//       router.push("/login"); // redirect to login if not logged in
//     }
//   }, [status, router]);

//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const res = await fetch(`/api/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//       }
//     }

//     if (id) fetchProduct();
//   }, [id]);

//   if (!product) return <p className="text-center mt-10">Loading details...</p>;

//   return (
//     <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-950 transition">
//       <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden">
//         <div className="relative w-full h-80">
//           <Image
//             src={product.images?.[0] || "/placeholder.png"}
//             alt={product.name}
//             fill
//             className="object-cover"
//           />
//         </div>
//         <div className="p-6">
//           <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
//             {product.name}
//           </h1>
//           <p className="text-gray-600 dark:text-gray-400 mb-2">
//             {product.category} • {product.brand}
//           </p>
//           <p className="text-yellow-500 font-medium">⭐ {product.rating} / 5</p>
//           <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//             ${product.price}
//           </p>
//           <p className="mt-2">{product.description}</p>
//           <p
//             className={`mt-2 font-medium ${
//               product.stock > 0
//                 ? "text-green-600 dark:text-green-400"
//                 : "text-red-500 dark:text-red-400"
//             }`}
//           >
//             {product.stock > 0
//               ? `Available Stock: ${product.stock}`
//               : "Out of Stock"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
