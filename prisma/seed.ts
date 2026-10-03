import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding NEXORA database...');

  // 1. Create Patient User (Budi Santoso)
  const patientUser = await prisma.user.upsert({
    where: { emailOrPhone: '3302192804920003' },
    update: {},
    create: {
      emailOrPhone: '3302192804920003',
      passwordHash: 'password123',
      name: 'Budi Santoso',
      role: 'PATIENT',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  });

  // 2. Create Kader User (Siti Aminah)
  const kaderUser = await prisma.user.upsert({
    where: { emailOrPhone: 'kader@sukamaju.desa.id' },
    update: {},
    create: {
      emailOrPhone: 'kader@sukamaju.desa.id',
      passwordHash: 'kader123',
      name: 'Siti Aminah',
      role: 'KADER',
      kaderProfile: {
        create: {
          posyanduName: 'Posyandu Mawar 02',
          regionArea: 'Desa Sukamaju'
        }
      }
    }
  });

  // 3. Create Doctor User (dr. Farhan Hidayat)
  const doctorUser = await prisma.user.upsert({
    where: { emailOrPhone: 'doctor@sukamaju.puskesmas.id' },
    update: {},
    create: {
      emailOrPhone: 'doctor@sukamaju.puskesmas.id',
      passwordHash: 'doctor123',
      name: 'dr. Farhan Hidayat, Sp.PD',
      role: 'DOCTOR',
      doctorProfile: {
        create: {
          specialty: 'Penyakit Dalam & Kesehatan Umum',
          puskesmasName: 'Puskesmas Pembantu Sukamaju',
          rating: 4.9
        }
      }
    }
  });

  // 4. Create Balita Profile (Ahmad Zaki)
  const balita = await prisma.balitaProfile.create({
    data: {
      parentId: patientUser.id,
      name: 'Ahmad Zaki',
      dob: new Date('2025-03-15'),
      gender: 'L',
      birthWeight: 3.2,
      birthHeight: 49.0
    }
  });

  console.log('Database seeded successfully!', {
    patient: patientUser.name,
    kader: kaderUser.name,
    doctor: doctorUser.name,
    balita: balita.name
  });
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
