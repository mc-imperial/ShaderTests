; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %55
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %55 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %55 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 5
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 2
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %6 3
         %32 = OpTypeBool
         %35 = OpConstant %6 1
         %52 = OpTypeFloat 32
         %53 = OpTypeVector %52 4
         %54 = OpTypePointer Output %53
         %55 = OpVariable %54 Output
         %56 = OpConstant %6 4
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %15 %21
         %23 = OpLoad %6 %22
               OpStore %20 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %20
         %30 = OpAccessChain %17 %14 %15 %15
         %31 = OpLoad %6 %30
         %33 = OpSLessThan %32 %29 %31
               OpBranchConditional %33 %25 %26
         %25 = OpLabel
         %34 = OpLoad %6 %8
         %36 = OpAccessChain %17 %14 %15 %35
         %37 = OpLoad %6 %36
         %38 = OpSDiv %6 %34 %37
         %39 = OpLoad %6 %8
         %40 = OpAccessChain %17 %14 %15 %35
         %41 = OpLoad %6 %40
         %42 = OpSDiv %6 %39 %41
         %43 = OpExtInst %6 %1 SMax %38 %42
               OpStore %8 %43
               OpBranch %27
         %27 = OpLabel
         %44 = OpLoad %6 %20
         %45 = OpIAdd %6 %44 %35
               OpStore %20 %45
               OpBranch %24
         %26 = OpLabel
         %46 = OpLoad %6 %8
         %47 = OpAccessChain %17 %14 %15 %35
         %48 = OpLoad %6 %47
         %49 = OpIEqual %32 %46 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %70
         %50 = OpLabel
         %57 = OpAccessChain %17 %14 %15 %56
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %52 %58
         %60 = OpAccessChain %17 %14 %15 %21
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %52 %61
         %63 = OpAccessChain %17 %14 %15 %21
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %52 %64
         %66 = OpAccessChain %17 %14 %15 %56
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %52 %67
         %69 = OpCompositeConstruct %53 %59 %62 %65 %68
               OpStore %55 %69
               OpBranch %51
         %70 = OpLabel
         %71 = OpAccessChain %17 %14 %15 %21
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %52 %72
         %74 = OpCompositeConstruct %53 %73 %73 %73 %73
               OpStore %55 %74
               OpBranch %51
         %51 = OpLabel
               OpReturn
               OpFunctionEnd
