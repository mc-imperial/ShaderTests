; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 136
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %117
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %19 "b"
               OpName %25 "c"
               OpName %28 "buf0"
               OpMemberName %28 0 "_GLF_uniform_float_values"
               OpName %30 ""
               OpName %34 "i"
               OpName %51 "v1"
               OpName %60 "i"
               OpName %117 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %117 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %6
         %20 = OpConstant %6 1
         %23 = OpTypeFloat 32
         %24 = OpTypePointer Function %23
         %26 = OpConstant %9 2
         %27 = OpTypeArray %23 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %23
         %35 = OpConstant %6 2
         %45 = OpTypeBool
         %49 = OpTypeVector %23 3
         %50 = OpTypePointer Function %49
         %52 = OpConstant %9 0
        %115 = OpTypeVector %23 4
        %116 = OpTypePointer Output %115
        %117 = OpVariable %116 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpVariable %7 Function
         %25 = OpVariable %24 Function
         %34 = OpVariable %7 Function
         %51 = OpVariable %50 Function
         %60 = OpVariable %7 Function
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %21 = OpAccessChain %16 %14 %15 %20
         %22 = OpLoad %6 %21
               OpStore %19 %22
         %32 = OpAccessChain %31 %30 %15 %15
         %33 = OpLoad %23 %32
               OpStore %25 %33
         %36 = OpAccessChain %16 %14 %15 %35
         %37 = OpLoad %6 %36
               OpStore %34 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %6 %19
         %44 = OpLoad %6 %8
         %46 = OpSLessThan %45 %43 %44
               OpBranchConditional %46 %39 %40
         %39 = OpLabel
         %47 = OpLoad %6 %19
         %48 = OpIAdd %6 %47 %20
               OpStore %19 %48
         %53 = OpAccessChain %24 %51 %52
         %54 = OpLoad %23 %53
         %55 = OpConvertFToS %6 %54
         %56 = OpSLessThan %45 %55 %20
         %57 = OpLogicalNot %45 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %59
         %58 = OpLabel
         %61 = OpAccessChain %16 %14 %15 %35
         %62 = OpLoad %6 %61
               OpStore %60 %62
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %6 %60
         %69 = OpAccessChain %16 %14 %15 %15
         %70 = OpLoad %6 %69
         %71 = OpSLessThan %45 %68 %70
               OpBranchConditional %71 %64 %65
         %64 = OpLabel
         %72 = OpLoad %6 %19
         %73 = OpIAdd %6 %72 %20
               OpStore %19 %73
         %74 = OpLoad %23 %25
         %75 = OpDPdy %23 %74
         %76 = OpAccessChain %31 %30 %15 %20
         %77 = OpLoad %23 %76
         %78 = OpFOrdEqual %45 %75 %77
               OpSelectionMerge %80 None
               OpBranchConditional %78 %79 %80
         %79 = OpLabel
         %81 = OpAccessChain %31 %30 %15 %20
         %82 = OpLoad %23 %81
               OpStore %25 %82
               OpBranch %80
         %80 = OpLabel
         %83 = OpLoad %23 %25
         %84 = OpAccessChain %31 %30 %15 %15
         %85 = OpLoad %23 %84
         %86 = OpFOrdGreaterThan %45 %83 %85
               OpSelectionMerge %88 None
               OpBranchConditional %86 %87 %88
         %87 = OpLabel
               OpBranch %65
         %88 = OpLabel
               OpBranch %66
         %66 = OpLabel
         %90 = OpLoad %6 %60
         %91 = OpIAdd %6 %90 %20
               OpStore %60 %91
               OpBranch %63
         %65 = OpLabel
               OpBranch %59
         %59 = OpLabel
               OpBranch %41
         %41 = OpLabel
         %92 = OpLoad %6 %34
         %93 = OpIAdd %6 %92 %20
               OpStore %34 %93
               OpBranch %38
         %40 = OpLabel
         %94 = OpLoad %6 %19
         %95 = OpAccessChain %16 %14 %15 %15
         %96 = OpLoad %6 %95
         %97 = OpIEqual %45 %94 %96
               OpSelectionMerge %99 None
               OpBranchConditional %97 %98 %99
         %98 = OpLabel
        %100 = OpLoad %23 %25
        %101 = OpAccessChain %31 %30 %15 %20
        %102 = OpLoad %23 %101
        %103 = OpFOrdEqual %45 %100 %102
        %104 = OpLogicalNot %45 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
        %107 = OpLoad %23 %25
        %108 = OpAccessChain %31 %30 %15 %15
        %109 = OpLoad %23 %108
        %110 = OpFOrdEqual %45 %107 %109
               OpBranch %106
        %106 = OpLabel
        %111 = OpPhi %45 %103 %98 %110 %105
               OpBranch %99
         %99 = OpLabel
        %112 = OpPhi %45 %97 %40 %111 %106
               OpSelectionMerge %114 None
               OpBranchConditional %112 %113 %131
        %113 = OpLabel
        %118 = OpAccessChain %16 %14 %15 %35
        %119 = OpLoad %6 %118
        %120 = OpConvertSToF %23 %119
        %121 = OpAccessChain %16 %14 %15 %20
        %122 = OpLoad %6 %121
        %123 = OpConvertSToF %23 %122
        %124 = OpAccessChain %16 %14 %15 %20
        %125 = OpLoad %6 %124
        %126 = OpConvertSToF %23 %125
        %127 = OpAccessChain %16 %14 %15 %35
        %128 = OpLoad %6 %127
        %129 = OpConvertSToF %23 %128
        %130 = OpCompositeConstruct %115 %120 %123 %126 %129
               OpStore %117 %130
               OpBranch %114
        %131 = OpLabel
        %132 = OpAccessChain %16 %14 %15 %20
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %23 %133
        %135 = OpCompositeConstruct %115 %134 %134 %134 %134
               OpStore %117 %135
               OpBranch %114
        %114 = OpLabel
               OpReturn
               OpFunctionEnd
