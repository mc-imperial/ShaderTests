#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct QuicksortObject {
 int numbers[10];
} ;

QuicksortObject obj = QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

void main()
{
 int i = 1;
 for(int j = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   i ++;
   {
    int i = i;
    int j = 1;
    int temp = 1;
    temp = obj.numbers[i];
    obj.numbers[j] = temp;
   }
  }
}
