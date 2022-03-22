; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 154
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %135
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "m"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %40 "v"
               OpName %47 "a"
               OpName %51 "i"
               OpName %66 "j"
               OpName %94 "buf2"
               OpMemberName %94 0 "zero"
               OpName %96 ""
               OpName %102 "buf0"
               OpMemberName %102 0 "_GLF_uniform_float_values"
               OpName %104 ""
               OpName %135 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpMemberDecorate %94 0 Offset 0
               OpDecorate %94 Block
               OpDecorate %96 DescriptorSet 0
               OpDecorate %96 Binding 2
               OpDecorate %101 ArrayStride 16
               OpMemberDecorate %102 0 Offset 0
               OpDecorate %102 Block
               OpDecorate %104 DescriptorSet 0
               OpDecorate %104 Binding 0
               OpDecorate %135 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypeMatrix %7 4
          %9 = OpTypePointer Function %8
         %11 = OpTypeInt 32 1
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 4
         %14 = OpTypeArray %11 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %11 0
         %19 = OpConstant %11 1
         %20 = OpTypePointer Uniform %11
         %24 = OpConstant %6 1
         %25 = OpConstant %6 0
         %39 = OpTypePointer Function %7
         %41 = OpConstant %11 3
         %46 = OpTypePointer Function %11
         %48 = OpConstant %11 2
         %62 = OpTypeBool
         %90 = OpTypePointer Function %6
         %94 = OpTypeStruct %6
         %95 = OpTypePointer Uniform %94
         %96 = OpVariable %95 Uniform
         %97 = OpTypePointer Uniform %6
        %100 = OpConstant %12 1
        %101 = OpTypeArray %6 %100
        %102 = OpTypeStruct %101
        %103 = OpTypePointer Uniform %102
        %104 = OpVariable %103 Uniform
        %129 = OpTypeVector %62 4
        %134 = OpTypePointer Output %7
        %135 = OpVariable %134 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %10 = OpVariable %9 Function
         %40 = OpVariable %39 Function
         %47 = OpVariable %46 Function
         %51 = OpVariable %46 Function
         %66 = OpVariable %46 Function
         %21 = OpAccessChain %20 %17 %18 %19
         %22 = OpLoad %11 %21
         %23 = OpConvertSToF %6 %22
         %26 = OpCompositeConstruct %7 %23 %25 %25 %25
         %27 = OpCompositeConstruct %7 %25 %23 %25 %25
         %28 = OpCompositeConstruct %7 %25 %25 %23 %25
         %29 = OpCompositeConstruct %7 %25 %25 %25 %23
         %30 = OpCompositeConstruct %8 %26 %27 %28 %29
               OpStore %10 %30
         %31 = OpAccessChain %20 %17 %18 %19
         %32 = OpLoad %11 %31
         %33 = OpConvertSToF %6 %32
         %34 = OpCompositeConstruct %7 %33 %25 %25 %25
         %35 = OpCompositeConstruct %7 %25 %33 %25 %25
         %36 = OpCompositeConstruct %7 %25 %25 %33 %25
         %37 = OpCompositeConstruct %7 %25 %25 %25 %33
         %38 = OpCompositeConstruct %8 %34 %35 %36 %37
               OpStore %10 %38
         %42 = OpAccessChain %20 %17 %18 %41
         %43 = OpLoad %11 %42
         %44 = OpConvertSToF %6 %43
         %45 = OpCompositeConstruct %7 %44 %44 %44 %44
               OpStore %40 %45
         %49 = OpAccessChain %20 %17 %18 %48
         %50 = OpLoad %11 %49
               OpStore %47 %50
         %52 = OpAccessChain %20 %17 %18 %19
         %53 = OpLoad %11 %52
               OpStore %51 %53
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %11 %47
         %60 = OpAccessChain %20 %17 %18 %18
         %61 = OpLoad %11 %60
         %63 = OpSLessThan %62 %59 %61
               OpBranchConditional %63 %55 %56
         %55 = OpLabel
         %64 = OpLoad %11 %47
         %65 = OpIAdd %11 %64 %19
               OpStore %47 %65
         %67 = OpAccessChain %20 %17 %18 %19
         %68 = OpLoad %11 %67
               OpStore %66 %68
               OpBranch %69
         %69 = OpLabel
               OpLoopMerge %71 %72 None
               OpBranch %73
         %73 = OpLabel
         %74 = OpLoad %11 %51
         %75 = OpAccessChain %20 %17 %18 %19
         %76 = OpLoad %11 %75
         %77 = OpSLessThanEqual %62 %74 %76
               OpSelectionMerge %79 None
               OpBranchConditional %77 %78 %79
         %78 = OpLabel
         %80 = OpLoad %11 %47
         %81 = OpAccessChain %20 %17 %18 %18
         %82 = OpLoad %11 %81
         %83 = OpSLessThan %62 %80 %82
               OpBranch %79
         %79 = OpLabel
         %84 = OpPhi %62 %77 %73 %83 %78
               OpBranchConditional %84 %70 %71
         %70 = OpLabel
         %85 = OpLoad %11 %47
         %86 = OpIAdd %11 %85 %19
               OpStore %47 %86
         %87 = OpLoad %11 %66
         %88 = OpLoad %11 %66
         %89 = OpLoad %11 %51
         %91 = OpAccessChain %90 %10 %88 %89
         %92 = OpLoad %6 %91
         %93 = OpAccessChain %90 %40 %87
               OpStore %93 %92
         %98 = OpAccessChain %97 %96 %18
         %99 = OpLoad %6 %98
        %105 = OpAccessChain %97 %104 %18 %18
        %106 = OpLoad %6 %105
        %107 = OpFOrdGreaterThan %62 %99 %106
               OpSelectionMerge %109 None
               OpBranchConditional %107 %108 %109
        %108 = OpLabel
               OpKill
        %109 = OpLabel
               OpBranch %72
         %72 = OpLabel
        %111 = OpLoad %11 %66
        %112 = OpISub %11 %111 %19
               OpStore %66 %112
               OpBranch %69
         %71 = OpLabel
               OpBranch %57
         %57 = OpLabel
        %113 = OpLoad %11 %51
        %114 = OpIAdd %11 %113 %19
               OpStore %51 %114
               OpBranch %54
         %56 = OpLabel
        %115 = OpLoad %7 %40
        %116 = OpAccessChain %20 %17 %18 %48
        %117 = OpLoad %11 %116
        %118 = OpConvertSToF %6 %117
        %119 = OpAccessChain %20 %17 %18 %19
        %120 = OpLoad %11 %119
        %121 = OpConvertSToF %6 %120
        %122 = OpAccessChain %20 %17 %18 %41
        %123 = OpLoad %11 %122
        %124 = OpConvertSToF %6 %123
        %125 = OpAccessChain %20 %17 %18 %41
        %126 = OpLoad %11 %125
        %127 = OpConvertSToF %6 %126
        %128 = OpCompositeConstruct %7 %118 %121 %124 %127
        %130 = OpFOrdEqual %129 %115 %128
        %131 = OpAll %62 %130
               OpSelectionMerge %133 None
               OpBranchConditional %131 %132 %149
        %132 = OpLabel
        %136 = OpAccessChain %20 %17 %18 %19
        %137 = OpLoad %11 %136
        %138 = OpConvertSToF %6 %137
        %139 = OpAccessChain %20 %17 %18 %48
        %140 = OpLoad %11 %139
        %141 = OpConvertSToF %6 %140
        %142 = OpAccessChain %20 %17 %18 %48
        %143 = OpLoad %11 %142
        %144 = OpConvertSToF %6 %143
        %145 = OpAccessChain %20 %17 %18 %19
        %146 = OpLoad %11 %145
        %147 = OpConvertSToF %6 %146
        %148 = OpCompositeConstruct %7 %138 %141 %144 %147
               OpStore %135 %148
               OpBranch %133
        %149 = OpLabel
        %150 = OpAccessChain %20 %17 %18 %48
        %151 = OpLoad %11 %150
        %152 = OpConvertSToF %6 %151
        %153 = OpCompositeConstruct %7 %152 %152 %152 %152
               OpStore %135 %153
               OpBranch %133
        %133 = OpLabel
               OpReturn
               OpFunctionEnd
