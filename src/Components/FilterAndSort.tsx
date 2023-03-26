import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterAndSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialFilterValues = searchParams.getAll('filter')
    const [filterValues, setFilterValues] = useState<string[]>(initialFilterValues || []);
    const handleFilterChange  = (value: string[]) => {
        setFilterValues(value)
    }

    useEffect(() => {
        let params: {filter?: string[]} = {}
        if(filterValues.length) params.filter = filterValues;
        setSearchParams(params)
    }, [filterValues])

    
  return (
    <Box p={6}>
        <Heading>Filter</Heading>
        <CheckboxGroup colorScheme='green' value={filterValues} onChange={handleFilterChange} >
        <Stack spacing={[1, 5]} direction={['column']}>
            <Checkbox value='bags'>Bags</Checkbox>
            <Checkbox value='electronics'>Electronics</Checkbox>
            <Checkbox value='jewelery'>Jewelery</Checkbox>
            <Checkbox value="men's clothing">Mens' Clothing</Checkbox>
            <Checkbox value="women's clothing">Womens' Clothing</Checkbox>
        </Stack>
    </CheckboxGroup>

    <Heading>Sort</Heading>
    
    <RadioGroup>
      <Stack direction='column'>
        <Radio value='asc'>Asc</Radio>
        <Radio value='desc'>Desc</Radio>
      </Stack>
    </RadioGroup>
    </Box>
  )
}

export default FilterAndSort