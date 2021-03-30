; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 120
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %101
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(i1;"
               OpName %9 "x"
               OpName %12 "a"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %23 "i"
               OpName %51 "indexable"
               OpName %80 "a"
               OpName %81 "param"
               OpName %85 "param"
               OpName %101 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %101 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 5
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpTypePointer Uniform %6
         %32 = OpConstant %6 1
         %35 = OpTypeBool
         %37 = OpConstant %6 3
         %46 = OpConstant %13 4
         %47 = OpTypeArray %6 %46
         %50 = OpTypePointer Function %47
         %58 = OpConstantTrue %35
         %70 = OpConstant %6 4
         %92 = OpConstant %6 2
         %98 = OpTypeFloat 32
         %99 = OpTypeVector %98 4
        %100 = OpTypePointer Output %99
        %101 = OpVariable %100 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %80 = OpVariable %7 Function
         %81 = OpVariable %7 Function
         %85 = OpVariable %7 Function
         %82 = OpAccessChain %20 %18 %19 %19
         %83 = OpLoad %6 %82
               OpStore %81 %83
         %84 = OpFunctionCall %6 %10 %81
               OpStore %80 %84
         %86 = OpAccessChain %20 %18 %19 %37
         %87 = OpLoad %6 %86
               OpStore %85 %87
         %88 = OpFunctionCall %6 %10 %85
         %89 = OpLoad %6 %80
         %90 = OpIAdd %6 %89 %88
               OpStore %80 %90
         %91 = OpLoad %6 %80
         %93 = OpAccessChain %20 %18 %19 %92
         %94 = OpLoad %6 %93
         %95 = OpIEqual %35 %91 %94
               OpSelectionMerge %97 None
               OpBranchConditional %95 %96 %115
         %96 = OpLabel
        %102 = OpAccessChain %20 %18 %19 %37
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %98 %103
        %105 = OpAccessChain %20 %18 %19 %19
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %98 %106
        %108 = OpAccessChain %20 %18 %19 %19
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %98 %109
        %111 = OpAccessChain %20 %18 %19 %37
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %98 %112
        %114 = OpCompositeConstruct %99 %104 %107 %110 %113
               OpStore %101 %114
               OpBranch %97
        %115 = OpLabel
        %116 = OpAccessChain %20 %18 %19 %19
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %98 %117
        %119 = OpCompositeConstruct %99 %118 %118 %118 %118
               OpStore %101 %119
               OpBranch %97
         %97 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %12 = OpVariable %7 Function
         %23 = OpVariable %7 Function
         %51 = OpVariable %50 Function
         %21 = OpAccessChain %20 %18 %19 %19
         %22 = OpLoad %6 %21
               OpStore %12 %22
         %24 = OpAccessChain %20 %18 %19 %19
         %25 = OpLoad %6 %24
               OpStore %23 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %6 %23
         %33 = OpAccessChain %20 %18 %19 %32
         %34 = OpLoad %6 %33
         %36 = OpSLessThan %35 %31 %34
               OpBranchConditional %36 %27 %28
         %27 = OpLabel
         %38 = OpAccessChain %20 %18 %19 %37
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %20 %18 %19 %37
         %41 = OpLoad %6 %40
         %42 = OpAccessChain %20 %18 %19 %37
         %43 = OpLoad %6 %42
         %44 = OpAccessChain %20 %18 %19 %37
         %45 = OpLoad %6 %44
         %48 = OpCompositeConstruct %47 %39 %41 %43 %45
         %49 = OpLoad %6 %12
               OpStore %51 %48
         %52 = OpAccessChain %7 %51 %49
         %53 = OpLoad %6 %52
         %54 = OpLoad %6 %9
         %55 = OpSGreaterThan %35 %53 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %67
         %56 = OpLabel
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %64
         %59 = OpLabel
         %61 = OpAccessChain %20 %18 %19 %37
         %62 = OpLoad %6 %61
               OpReturnValue %62
         %64 = OpLabel
         %65 = OpAccessChain %20 %18 %19 %37
         %66 = OpLoad %6 %65
               OpStore %12 %66
               OpBranch %60
         %60 = OpLabel
               OpBranch %57
         %67 = OpLabel
               OpSelectionMerge %69 None
               OpBranchConditional %58 %68 %69
         %68 = OpLabel
         %71 = OpAccessChain %20 %18 %19 %70
         %72 = OpLoad %6 %71
               OpReturnValue %72
         %69 = OpLabel
               OpBranch %57
         %57 = OpLabel
               OpBranch %29
         %29 = OpLabel
         %74 = OpLoad %6 %23
         %75 = OpIAdd %6 %74 %32
               OpStore %23 %75
               OpBranch %26
         %28 = OpLabel
         %76 = OpAccessChain %20 %18 %19 %19
         %77 = OpLoad %6 %76
               OpReturnValue %77
               OpFunctionEnd
