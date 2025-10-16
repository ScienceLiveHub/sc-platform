import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [templates, setTemplates] = useState([])
  const [connectionStatus, setConnectionStatus] = useState('Connecting...')

  useEffect(() => {
    // Test connection by fetching templates
    async function fetchTemplates() {
      try {
        const { data, error } = await supabase
          .from('templates')
          .select('*')
        
        if (error) throw error
        
        setTemplates(data || [])
        setConnectionStatus('✅ Connected to Supabase!')
      } catch (error) {
        console.error('Error:', error)
        setConnectionStatus('❌ Connection failed: ' + error.message)
      }
    }

    fetchTemplates()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>🧬 Science Live Platform</h1>
        <p>Transform Research into Connected Knowledge</p>
      </header>
      <main>
        <div className="card">
          <h2>MVP Status</h2>
          <p>Frontend: ✅ Deployed on Cloudflare</p>
          <p>Database: {connectionStatus}</p>
          <p>Templates loaded: {templates.length}</p>
        </div>
        
        {templates.length > 0 && (
          <div className="card">
            <h3>Available Templates:</h3>
            <ul style={{ textAlign: 'left' }}>
              {templates.map(t => (
                <li key={t.id}>
                  <strong>{t.name}</strong> - {t.description}
                  <br />Credits: {t.credit_value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
