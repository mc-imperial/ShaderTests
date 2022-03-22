; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 105
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %86
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %43 "i"
               OpName %59 "a"
               OpName %86 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %86 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 5
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 3
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 4
         %42 = OpTypePointer Function %6
         %44 = OpConstant %6 2
         %57 = OpTypeBool
         %61 = OpConstant %6 1
         %83 = OpTypeFloat 32
         %84 = OpTypeVector %83 4
         %85 = OpTypePointer Output %84
         %86 = OpVariable %85 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %43 = OpVariable %42 Function
         %59 = OpVariable %42 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %19 %16 %17 %18
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %19 %16 %17 %18
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %19 %16 %17 %18
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %19 %16 %17 %18
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %19 %16 %17 %18
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %19 %16 %17 %18
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %19 %16 %17 %18
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %19 %16 %17 %18
         %40 = OpLoad %6 %39
         %41 = OpCompositeConstruct %9 %21 %24 %26 %28 %30 %32 %34 %36 %38 %40
               OpStore %11 %41
         %45 = OpAccessChain %19 %16 %17 %44
         %46 = OpLoad %6 %45
               OpStore %43 %46
         %47 = OpAccessChain %19 %16 %17 %18
         %48 = OpLoad %6 %47
               OpStore %43 %48
               OpBranch %49
         %49 = OpLabel
               OpLoopMerge %51 %52 None
               OpBranch %53
         %53 = OpLabel
         %54 = OpLoad %6 %43
         %55 = OpAccessChain %19 %16 %17 %17
         %56 = OpLoad %6 %55
         %58 = OpSLessThan %57 %54 %56
               OpBranchConditional %58 %50 %51
         %50 = OpLabel
         %60 = OpLoad %6 %43
         %62 = OpIAdd %6 %60 %61
               OpStore %59 %62
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %6 %43
         %69 = OpLoad %6 %59
         %70 = OpSLessThan %57 %68 %69
               OpBranchConditional %70 %64 %65
         %64 = OpLabel
         %71 = OpAccessChain %19 %16 %17 %18
         %72 = OpLoad %6 %71
         %73 = OpAccessChain %42 %11 %72
         %74 = OpLoad %6 %73
               OpStore %43 %74
               OpBranch %66
         %66 = OpLabel
               OpBranch %63
         %65 = OpLabel
               OpBranch %52
         %52 = OpLabel
         %75 = OpLoad %6 %43
         %76 = OpIAdd %6 %75 %61
               OpStore %43 %76
               OpBranch %49
         %51 = OpLabel
         %77 = OpLoad %6 %43
         %78 = OpAccessChain %19 %16 %17 %61
         %79 = OpLoad %6 %78
         %80 = OpIEqual %57 %77 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %100
         %81 = OpLabel
         %87 = OpAccessChain %19 %16 %17 %18
         %88 = OpLoad %6 %87
         %89 = OpConvertSToF %83 %88
         %90 = OpAccessChain %19 %16 %17 %44
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %83 %91
         %93 = OpAccessChain %19 %16 %17 %44
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %83 %94
         %96 = OpAccessChain %19 %16 %17 %18
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %83 %97
         %99 = OpCompositeConstruct %84 %89 %92 %95 %98
               OpStore %86 %99
               OpBranch %82
        %100 = OpLabel
        %101 = OpAccessChain %19 %16 %17 %44
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %83 %102
        %104 = OpCompositeConstruct %84 %103 %103 %103 %103
               OpStore %86 %104
               OpBranch %82
         %82 = OpLabel
               OpReturn
               OpFunctionEnd
