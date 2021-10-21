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
 obj.numbers[i] = 1;
 int l = 1;
 int stack[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
 int top = 1;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   l = stack[1];
   int performPartition_inline_return_value_1 = 1;
   {
    int l = l;
    do
     {
      _GLF_global_loop_count ++;
      if(gl_FragCoord.y < 1.0)
       {
        l ++;
       }
     }
    while((gl_FragCoord.x < 1.0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
    int i = 1;
    int j = 1;
    j = l;
    if(obj.numbers[j] <= 1)
     {
      i ++;
     }
    performPartition_inline_return_value_1 = i;
   }
   stack[++ top] = performPartition_inline_return_value_1;
  }
}
