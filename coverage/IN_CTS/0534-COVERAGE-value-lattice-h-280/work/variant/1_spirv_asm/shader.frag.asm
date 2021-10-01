; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 113
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %94
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "b"
               OpName %35 "i"
               OpName %65 "indexable"
               OpName %94 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %94 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 6
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %45 = OpConstant %6 2
         %48 = OpConstant %6 3
         %51 = OpConstant %6 4
         %54 = OpConstant %6 5
         %59 = OpConstant %9 5
         %60 = OpTypeArray %6 %59
         %64 = OpTypePointer Function %60
         %91 = OpTypeFloat 32
         %92 = OpTypeVector %91 4
         %93 = OpTypePointer Output %92
         %94 = OpVariable %93 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %35 = OpVariable %7 Function
         %65 = OpVariable %64 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %21 = OpAccessChain %17 %14 %15 %16
         %22 = OpLoad %6 %21
               OpStore %20 %22
               OpBranch %23
         %23 = OpLabel
               OpLoopMerge %25 %26 None
               OpBranch %27
         %27 = OpLabel
         %28 = OpLoad %6 %20
         %29 = OpAccessChain %17 %14 %15 %16
         %30 = OpLoad %6 %29
         %32 = OpSGreaterThanEqual %31 %28 %30
               OpBranchConditional %32 %24 %25
         %24 = OpLabel
         %33 = OpLoad %6 %20
         %34 = OpISub %6 %33 %16
               OpStore %20 %34
         %36 = OpAccessChain %17 %14 %15 %16
         %37 = OpLoad %6 %36
               OpStore %35 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %6 %35
         %44 = OpINotEqual %31 %43 %15
               OpBranchConditional %44 %39 %40
         %39 = OpLabel
         %46 = OpAccessChain %17 %14 %15 %45
         %47 = OpLoad %6 %46
         %49 = OpAccessChain %17 %14 %15 %48
         %50 = OpLoad %6 %49
         %52 = OpAccessChain %17 %14 %15 %51
         %53 = OpLoad %6 %52
         %55 = OpAccessChain %17 %14 %15 %54
         %56 = OpLoad %6 %55
         %57 = OpAccessChain %17 %14 %15 %16
         %58 = OpLoad %6 %57
         %61 = OpCompositeConstruct %60 %47 %50 %53 %56 %58
         %62 = OpLoad %6 %20
         %63 = OpISub %6 %62 %16
               OpStore %20 %63
               OpStore %65 %61
         %66 = OpAccessChain %7 %65 %62
         %67 = OpLoad %6 %66
               OpStore %8 %67
               OpBranch %41
         %41 = OpLabel
         %68 = OpLoad %6 %35
         %69 = OpISub %6 %68 %16
               OpStore %35 %69
               OpBranch %38
         %40 = OpLabel
         %70 = OpLoad %6 %8
         %71 = OpAccessChain %17 %14 %15 %16
         %72 = OpLoad %6 %71
         %73 = OpSGreaterThan %31 %70 %72
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %75
         %74 = OpLabel
         %76 = OpLoad %6 %20
         %77 = OpIAdd %6 %76 %16
               OpStore %20 %77
               OpBranch %75
         %75 = OpLabel
               OpBranch %26
         %26 = OpLabel
               OpBranch %23
         %25 = OpLabel
         %78 = OpLoad %6 %8
         %79 = OpAccessChain %17 %14 %15 %45
         %80 = OpLoad %6 %79
         %81 = OpIEqual %31 %78 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %83
         %82 = OpLabel
         %84 = OpLoad %6 %20
         %85 = OpAccessChain %17 %14 %15 %15
         %86 = OpLoad %6 %85
         %87 = OpIEqual %31 %84 %86
               OpBranch %83
         %83 = OpLabel
         %88 = OpPhi %31 %81 %25 %87 %82
               OpSelectionMerge %90 None
               OpBranchConditional %88 %89 %108
         %89 = OpLabel
         %95 = OpAccessChain %17 %14 %15 %16
         %96 = OpLoad %6 %95
         %97 = OpConvertSToF %91 %96
         %98 = OpAccessChain %17 %14 %15 %15
         %99 = OpLoad %6 %98
        %100 = OpConvertSToF %91 %99
        %101 = OpAccessChain %17 %14 %15 %15
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %91 %102
        %104 = OpAccessChain %17 %14 %15 %16
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %91 %105
        %107 = OpCompositeConstruct %92 %97 %100 %103 %106
               OpStore %94 %107
               OpBranch %90
        %108 = OpLabel
        %109 = OpAccessChain %17 %14 %15 %15
        %110 = OpLoad %6 %109
        %111 = OpConvertSToF %91 %110
        %112 = OpCompositeConstruct %92 %111 %111 %111 %111
               OpStore %94 %112
               OpBranch %90
         %90 = OpLabel
               OpReturn
               OpFunctionEnd
