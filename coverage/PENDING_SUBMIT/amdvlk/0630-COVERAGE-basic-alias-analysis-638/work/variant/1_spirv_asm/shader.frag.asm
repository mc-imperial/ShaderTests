; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 148
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %129
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "data"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %43 "i"
               OpName %46 "buf0"
               OpMemberName %46 0 "_GLF_uniform_int_values"
               OpName %48 ""
               OpName %64 "buf2"
               OpMemberName %64 0 "zero"
               OpName %66 ""
               OpName %73 "i"
               OpName %129 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %45 ArrayStride 16
               OpMemberDecorate %46 0 Offset 0
               OpDecorate %46 Block
               OpDecorate %48 DescriptorSet 0
               OpDecorate %48 Binding 0
               OpMemberDecorate %64 0 Offset 0
               OpDecorate %64 Block
               OpDecorate %66 DescriptorSet 0
               OpDecorate %66 Binding 2
               OpDecorate %129 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 3
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %42 = OpTypePointer Function %17
         %44 = OpConstant %7 4
         %45 = OpTypeArray %17 %44
         %46 = OpTypeStruct %45
         %47 = OpTypePointer Uniform %46
         %48 = OpVariable %47 Uniform
         %49 = OpTypePointer Uniform %17
         %58 = OpConstant %17 3
         %61 = OpTypeBool
         %64 = OpTypeStruct %6
         %65 = OpTypePointer Uniform %64
         %66 = OpVariable %65 Uniform
         %69 = OpTypePointer Function %6
         %80 = OpConstant %17 9
         %97 = OpConstant %17 2
        %127 = OpTypeVector %6 4
        %128 = OpTypePointer Output %127
        %129 = OpVariable %128 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %43 = OpVariable %42 Function
         %73 = OpVariable %42 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %16 %18 %19
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %16 %18 %19
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %20 %16 %18 %19
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %20 %16 %18 %19
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %20 %16 %18 %19
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %20 %16 %18 %19
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %20 %16 %18 %19
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %20 %16 %18 %19
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %20 %16 %18 %19
         %40 = OpLoad %6 %39
         %41 = OpCompositeConstruct %9 %22 %24 %26 %28 %30 %32 %34 %36 %38 %40
               OpStore %11 %41
         %50 = OpAccessChain %49 %48 %18 %19
         %51 = OpLoad %17 %50
               OpStore %43 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %17 %43
         %59 = OpAccessChain %49 %48 %18 %58
         %60 = OpLoad %17 %59
         %62 = OpSLessThan %61 %57 %60
               OpBranchConditional %62 %53 %54
         %53 = OpLabel
         %63 = OpLoad %17 %43
         %67 = OpAccessChain %20 %66 %18
         %68 = OpLoad %6 %67
         %70 = OpAccessChain %69 %11 %63
               OpStore %70 %68
               OpBranch %55
         %55 = OpLabel
         %71 = OpLoad %17 %43
         %72 = OpIAdd %17 %71 %19
               OpStore %43 %72
               OpBranch %52
         %54 = OpLabel
               OpStore %73 %18
               OpBranch %74
         %74 = OpLabel
               OpLoopMerge %76 %77 None
               OpBranch %78
         %78 = OpLabel
         %79 = OpLoad %17 %73
         %81 = OpSLessThan %61 %79 %80
               OpBranchConditional %81 %75 %76
         %75 = OpLabel
         %82 = OpLoad %17 %73
         %83 = OpAccessChain %69 %11 %82
         %84 = OpLoad %6 %83
         %85 = OpAccessChain %20 %16 %18 %19
         %86 = OpLoad %6 %85
         %87 = OpFOrdLessThan %61 %84 %86
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %89
         %88 = OpLabel
         %90 = OpLoad %17 %73
         %91 = OpAccessChain %20 %16 %18 %18
         %92 = OpLoad %6 %91
         %93 = OpAccessChain %69 %11 %90
               OpStore %93 %92
               OpBranch %76
         %89 = OpLabel
               OpBranch %77
         %77 = OpLabel
         %95 = OpLoad %17 %73
         %96 = OpIAdd %17 %95 %19
               OpStore %73 %96
               OpBranch %74
         %76 = OpLabel
         %98 = OpAccessChain %49 %48 %18 %97
         %99 = OpLoad %17 %98
        %100 = OpAccessChain %69 %11 %99
        %101 = OpLoad %6 %100
        %102 = OpAccessChain %20 %16 %18 %19
        %103 = OpLoad %6 %102
        %104 = OpFOrdEqual %61 %101 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
        %107 = OpAccessChain %49 %48 %18 %19
        %108 = OpLoad %17 %107
        %109 = OpAccessChain %69 %11 %108
        %110 = OpLoad %6 %109
        %111 = OpAccessChain %20 %16 %18 %18
        %112 = OpLoad %6 %111
        %113 = OpFOrdEqual %61 %110 %112
               OpBranch %106
        %106 = OpLabel
        %114 = OpPhi %61 %104 %76 %113 %105
               OpSelectionMerge %116 None
               OpBranchConditional %114 %115 %116
        %115 = OpLabel
        %117 = OpAccessChain %49 %48 %18 %18
        %118 = OpLoad %17 %117
        %119 = OpAccessChain %69 %11 %118
        %120 = OpLoad %6 %119
        %121 = OpAccessChain %20 %16 %18 %97
        %122 = OpLoad %6 %121
        %123 = OpFOrdEqual %61 %120 %122
               OpBranch %116
        %116 = OpLabel
        %124 = OpPhi %61 %114 %106 %123 %115
               OpSelectionMerge %126 None
               OpBranchConditional %124 %125 %143
        %125 = OpLabel
        %130 = OpAccessChain %49 %48 %18 %19
        %131 = OpLoad %17 %130
        %132 = OpConvertSToF %6 %131
        %133 = OpAccessChain %49 %48 %18 %97
        %134 = OpLoad %17 %133
        %135 = OpConvertSToF %6 %134
        %136 = OpAccessChain %49 %48 %18 %97
        %137 = OpLoad %17 %136
        %138 = OpConvertSToF %6 %137
        %139 = OpAccessChain %49 %48 %18 %19
        %140 = OpLoad %17 %139
        %141 = OpConvertSToF %6 %140
        %142 = OpCompositeConstruct %127 %132 %135 %138 %141
               OpStore %129 %142
               OpBranch %126
        %143 = OpLabel
        %144 = OpAccessChain %49 %48 %18 %97
        %145 = OpLoad %17 %144
        %146 = OpConvertSToF %6 %145
        %147 = OpCompositeConstruct %127 %146 %146 %146 %146
               OpStore %129 %147
               OpBranch %126
        %126 = OpLabel
               OpReturn
               OpFunctionEnd
