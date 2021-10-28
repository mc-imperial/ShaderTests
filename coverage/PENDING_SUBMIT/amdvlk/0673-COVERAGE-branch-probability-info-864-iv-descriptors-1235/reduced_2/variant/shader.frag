#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 for(int j = 1; (j < 10) && (_GLF_global_loop_count < _GLF_global_loop_bound); j ++)
  {
   _GLF_global_loop_count ++;
   temp[j] = data[j];
  }
 int high = 1;
 high = 10;
 for(int m = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); m = 2 * m)
  {
   _GLF_global_loop_count ++;
   for(int i = 1; (i < high) && (_GLF_global_loop_count < _GLF_global_loop_bound); i += m)
    {
     _GLF_global_loop_count ++;
     for(int i = i; (i <= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
      {
       _GLF_global_loop_count ++;
       data[i] = temp[i];
      }
    }
  }
}
