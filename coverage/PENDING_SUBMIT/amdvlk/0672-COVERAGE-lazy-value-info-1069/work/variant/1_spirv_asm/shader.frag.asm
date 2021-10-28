; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "msb10"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %22 "a"
               OpName %25 "i"
               OpName %52 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %52 Location 0
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
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %20 = OpConstant %6 1024
         %36 = OpTypeBool
         %43 = OpConstant %6 2
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %7 Function
         %25 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
         %21 = OpBitwiseOr %6 %19 %20
               OpStore %8 %21
         %23 = OpAccessChain %17 %14 %15 %16
         %24 = OpLoad %6 %23
               OpStore %22 %24
         %26 = OpAccessChain %17 %14 %15 %15
         %27 = OpLoad %6 %26
               OpStore %25 %27
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %32
         %32 = OpLabel
         %33 = OpLoad %6 %25
         %34 = OpLoad %6 %8
         %35 = OpExtInst %6 %1 FindILsb %34
         %37 = OpSLessThan %36 %33 %35
               OpBranchConditional %37 %29 %30
         %29 = OpLabel
         %38 = OpLoad %6 %22
         %39 = OpIAdd %6 %38 %16
               OpStore %22 %39
               OpBranch %31
         %31 = OpLabel
         %40 = OpLoad %6 %25
         %41 = OpIAdd %6 %40 %16
               OpStore %25 %41
               OpBranch %28
         %30 = OpLabel
         %42 = OpLoad %6 %22
         %44 = OpAccessChain %17 %14 %15 %43
         %45 = OpLoad %6 %44
         %46 = OpIEqual %36 %42 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %66
         %47 = OpLabel
         %53 = OpAccessChain %17 %14 %15 %15
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %56 = OpAccessChain %17 %14 %15 %16
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %49 %57
         %59 = OpAccessChain %17 %14 %15 %16
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %49 %60
         %62 = OpAccessChain %17 %14 %15 %15
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %49 %63
         %65 = OpCompositeConstruct %50 %55 %58 %61 %64
               OpStore %52 %65
               OpBranch %48
         %66 = OpLabel
         %67 = OpAccessChain %17 %14 %15 %16
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %49 %68
         %70 = OpCompositeConstruct %50 %69 %69 %69 %69
               OpStore %52 %70
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
