import Navbar from '../../components/Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'

const zoneUniversities = {
  dhaka: [
    {
      name: 'Dhaka University',
      slug: 'du'
    },
    {
      name: 'JU',
      slug: 'ju'
    },
    {
      name: 'BRAC University',
      slug: 'brac'
    },
    {
      name: 'NSU',
      slug: 'nsu'
    }
  ],

  rajshahi: [
    {
      name: 'RU',
      slug: 'ru'
    },
    {
      name: 'RUET',
      slug: 'ruet'
    }
  ],

  rangpur: [
    {
      name: 'RMC',
      slug: 'rmc'
    }
  ]
}

function ZoneUniversities() {
  const { zone } = useParams()

  const universities =
    zoneUniversities[zone] || []

  return (
    <>
      <Navbar />

      <section className='university-section'>
        <div className='container'>
          <div className='section-header'>
            <h2>
              {zone.toUpperCase()} Zone
            </h2>

            <p>
              Explore universities in this zone
            </p>
          </div>

          <div className='university-grid'>
            {universities.map(university => (
              <Link
                key={university.slug}
                to={`/zone/${zone}/${university.slug}`}
                className='university-card'
              >
                {university.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ZoneUniversities