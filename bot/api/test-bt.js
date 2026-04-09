// Raw Braintrust API test - bypass the SDK entirely
export default async function handler(req, res) {
  const results = { steps: [] };
  const apiKey = process.env.BRAINTRUST_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ error: 'BRAINTRUST_API_KEY not set' });
  }

  // Step 1: Test the API key by listing projects
  try {
    const r = await fetch('https://api.braintrust.dev/v1/project', {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    const data = await r.json();
    results.steps.push({
      step: 'list_projects',
      status: r.status,
      projects: data.objects?.map(p => ({ id: p.id, name: p.name })) || data,
    });
  } catch (e) {
    results.steps.push({ step: 'list_projects', error: e.message });
  }

  // Step 2: Create or find the project
  let projectId = null;
  try {
    const r = await fetch('https://api.braintrust.dev/v1/project', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'claudesington-bot' }),
    });
    const data = await r.json();
    projectId = data.id;
    results.steps.push({
      step: 'create_project',
      status: r.status,
      projectId: data.id,
      name: data.name,
    });
  } catch (e) {
    results.steps.push({ step: 'create_project', error: e.message });
  }

  // Step 3: Insert a log row directly via API
  if (projectId) {
    try {
      const r = await fetch(`https://api.braintrust.dev/v1/project_logs/${projectId}/insert`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: [{
            input: { message: 'direct API test' },
            output: { response: 'if you see this, the API works' },
            metadata: { test: true, timestamp: new Date().toISOString() },
          }],
        }),
      });
      const data = await r.json();
      results.steps.push({
        step: 'insert_log',
        status: r.status,
        response: data,
      });
    } catch (e) {
      results.steps.push({ step: 'insert_log', error: e.message });
    }
  }

  return res.status(200).json(results);
}
