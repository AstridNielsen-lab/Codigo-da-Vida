import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, Button } from '../styles/GlobalStyles';

const SimulationContainer = styled(Card)`
  margin: 20px 0;
  max-width: 100%;
`;

const ControlPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme.text};
`;

const Slider = styled.input`
  width: 150px;
  height: 4px;
  border-radius: 2px;
  background: ${props => props.theme.border};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.theme.secondary};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.theme.secondary};
    cursor: pointer;
    border: none;
  }
`;

const InfoPanel = styled.div`
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  font-size: 0.9rem;
`;

const StatValue = styled.span`
  font-weight: 600;
  color: ${props => props.color || props.theme.secondary};
`;

const PlayButton = styled(Button)`
  background: ${props => props.isPlaying ? '#e74c3c' : props.theme.accent};
  border-color: ${props => props.isPlaying ? '#e74c3c' : props.theme.accent};
  color: white;

  &:hover {
    background: ${props => props.isPlaying ? '#c0392b' : '#229954'};
    border-color: ${props => props.isPlaying ? '#c0392b' : '#229954'};
  }
`;

const TelomereSimulation = () => {
  const svgRef = useRef();
  const [age, setAge] = useState(30);
  const [telomeraseActivity, setTelomeraseActivity] = useState(50);
  const [stressLevel, setStressLevel] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTelomereLength, setCurrentTelomereLength] = useState(8000);
  const [cellDivisions, setCellDivisions] = useState(0);
  const animationRef = useRef();

  // Telomere data simulation
  const generateTelomereData = (ageValue, telomeraseValue, stressValue) => {
    const baseLength = 10000; // Base pairs
    const ageEffect = (ageValue - 20) * 100; // Aging effect
    const telomeraseEffect = (telomeraseValue - 50) * 30; // Telomerase compensation
    const stressEffect = (stressValue - 30) * 50; // Stress impact
    
    const calculatedLength = Math.max(
      2000, // Minimum telomere length
      baseLength - ageEffect + telomeraseEffect - stressEffect
    );
    
    return calculatedLength;
  };

  // Calculate cellular age based on telomere length
  const calculateCellularAge = (telomereLength) => {
    const maxLength = 10000;
    const minLength = 2000;
    const normalizedLength = (telomereLength - minLength) / (maxLength - minLength);
    return Math.round(20 + (80 * (1 - normalizedLength)));
  };

  // Calculate senescence risk
  const calculateSenescenceRisk = (telomereLength) => {
    if (telomereLength > 7000) return 'Baixo';
    if (telomereLength > 4000) return 'Moderado';
    return 'Alto';
  };

  // D3 visualization
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 60 };

    svg.attr('width', width).attr('height', height);

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Generate age progression data
    const ageData = [];
    for (let a = 20; a <= 100; a += 2) {
      const telomereLength = generateTelomereData(a, telomeraseActivity, stressLevel);
      ageData.push({ age: a, telomereLength });
    }

    // Scales
    const xScale = d3.scaleLinear()
      .domain([20, 100])
      .range([0, chartWidth]);

    const yScale = d3.scaleLinear()
      .domain([2000, 10000])
      .range([chartHeight, 0]);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('x', chartWidth / 2)
      .attr('y', 35)
      .attr('fill', 'currentColor')
      .style('text-anchor', 'middle')
      .text('Idade (anos)');

    g.append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -40)
      .attr('x', -chartHeight / 2)
      .attr('fill', 'currentColor')
      .style('text-anchor', 'middle')
      .text('Comprimento dos Telômeros (pb)');

    // Line generator
    const line = d3.line()
      .x(d => xScale(d.age))
      .y(d => yScale(d.telomereLength))
      .curve(d3.curveMonotoneX);

    // Telomere length curve
    const path = g.append('path')
      .datum(ageData)
      .attr('fill', 'none')
      .attr('stroke', '#3498db')
      .attr('stroke-width', 3)
      .attr('d', line);

    // Animate path drawing
    const totalLength = path.node().getTotalLength();
    path
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr('stroke-dashoffset', 0);

    // Current age marker
    const currentData = ageData.find(d => Math.abs(d.age - age) < 1) || ageData[0];
    setCurrentTelomereLength(currentData.telomereLength);

    g.append('circle')
      .attr('cx', xScale(age))
      .attr('cy', yScale(currentData.telomereLength))
      .attr('r', 6)
      .attr('fill', '#e74c3c')
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Critical zones
    g.append('rect')
      .attr('x', 0)
      .attr('y', yScale(4000))
      .attr('width', chartWidth)
      .attr('height', yScale(2000) - yScale(4000))
      .attr('fill', '#e74c3c')
      .attr('opacity', 0.1);

    g.append('text')
      .attr('x', chartWidth - 10)
      .attr('y', yScale(3000))
      .attr('fill', '#e74c3c')
      .style('text-anchor', 'end')
      .style('font-size', '12px')
      .text('Zona de Senescência');

    // Telomerase activity visualization
    if (telomeraseActivity > 70) {
      g.append('path')
        .datum(ageData.map(d => ({ 
          age: d.age, 
          telomereLength: d.telomereLength + (telomeraseActivity - 50) * 20 
        })))
        .attr('fill', 'none')
        .attr('stroke', '#27ae60')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5')
        .attr('d', line);

      g.append('text')
        .attr('x', chartWidth - 10)
        .attr('y', 20)
        .attr('fill', '#27ae60')
        .style('text-anchor', 'end')
        .style('font-size', '12px')
        .text('Com Alta Atividade da Telomerase');
    }

  }, [age, telomeraseActivity, stressLevel]);

  // Animation loop
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setCellDivisions(prev => prev + 1);
        setCurrentTelomereLength(prev => Math.max(2000, prev - Math.random() * 50));
        animationRef.current = setTimeout(animate, 200);
      };
      animate();
    } else {
      clearTimeout(animationRef.current);
    }

    return () => clearTimeout(animationRef.current);
  }, [isPlaying]);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      setCellDivisions(0);
      setCurrentTelomereLength(generateTelomereData(age, telomeraseActivity, stressLevel));
    }
  };

  const cellularAge = calculateCellularAge(currentTelomereLength);
  const senescenceRisk = calculateSenescenceRisk(currentTelomereLength);

  return (
    <SimulationContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Simulação da Dinâmica dos Telômeros</h2>
        <p>
          Explore como os telômeros encurtam com a idade e como diferentes fatores 
          influenciam este processo fundamental do envelhecimento celular.
        </p>

        <ControlPanel>
          <ControlGroup>
            <Label>Idade: {age} anos</Label>
            <Slider
              type="range"
              min="20"
              max="100"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </ControlGroup>

          <ControlGroup>
            <Label>Atividade da Telomerase: {telomeraseActivity}%</Label>
            <Slider
              type="range"
              min="0"
              max="100"
              value={telomeraseActivity}
              onChange={(e) => setTelomeraseActivity(parseInt(e.target.value))}
            />
          </ControlGroup>

          <ControlGroup>
            <Label>Nível de Estresse: {stressLevel}%</Label>
            <Slider
              type="range"
              min="0"
              max="100"
              value={stressLevel}
              onChange={(e) => setStressLevel(parseInt(e.target.value))}
            />
          </ControlGroup>

          <PlayButton 
            isPlaying={isPlaying} 
            onClick={toggleAnimation}
          >
            {isPlaying ? '⏹️ Parar' : '▶️ Simular Divisões'}
          </PlayButton>
        </ControlPanel>

        <div style={{ width: '100%', overflowX: 'auto' }}>
          <svg ref={svgRef}></svg>
        </div>

        <InfoPanel>
          <h3>Métricas Atuais</h3>
          <StatItem>
            <span>Comprimento dos Telômeros:</span>
            <StatValue color="#3498db">{Math.round(currentTelomereLength)} pb</StatValue>
          </StatItem>
          <StatItem>
            <span>Idade Celular Estimada:</span>
            <StatValue color="#e74c3c">{cellularAge} anos</StatValue>
          </StatItem>
          <StatItem>
            <span>Risco de Senescência:</span>
            <StatValue color={senescenceRisk === 'Alto' ? '#e74c3c' : senescenceRisk === 'Moderado' ? '#f39c12' : '#27ae60'}>
              {senescenceRisk}
            </StatValue>
          </StatItem>
          <StatItem>
            <span>Divisões Celulares Simuladas:</span>
            <StatValue>{cellDivisions}</StatValue>
          </StatItem>
        </InfoPanel>

        <div style={{ marginTop: '20px', fontSize: '0.9rem', color: '#7f8c8d' }}>
          <h4>Referências Científicas:</h4>
          <ul>
            <li>Blackburn, E.H. (2000). Telomere states and cell fates. Nature 408, 53-56.</li>
            <li>López-Otín, C. et al. (2013). The hallmarks of aging. Cell 153, 1194-1217.</li>
            <li>Shay, J.W. & Wright, W.E. (2019). Telomeres and telomerase. Nature Reviews Molecular Cell Biology 20, 299-309.</li>
          </ul>
        </div>
      </motion.div>
    </SimulationContainer>
  );
};

export default TelomereSimulation;
